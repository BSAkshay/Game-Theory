from fastapi import FastAPI
from pydantic import BaseModel
import uuid
from game_logic import win_probability
from bot import bot_decision

app = FastAPI()
GAMES = {}

class MatchReq(BaseModel):
    bot: bool = True

@app.post("/match")
def match(req: MatchReq):
    gid = str(uuid.uuid4())
    GAMES[gid] = {
        "day": 1,
        "phase": "night",
        "history": [],
        "graph": [],
        "players": [
            {"military": 300, "belief_variance": 1.0, "spies": [], "choice": None},
            {"military": 300, "belief_variance": 1.0, "spies": [], "choice": None},
        ],
        "bot": req.bot
    }
    return {"game_id": gid}

@app.post("/choose/{gid}/{pid}")
def choose(gid: str, pid: int, choice: str):
    game = GAMES[gid]
    game["players"][pid]["choice"] = choice
    return {"ok": True}

@app.post("/advance/{gid}")
def advance(gid: str):
    game = GAMES[gid]

    if game["bot"]:
        game["players"][1]["choice"] = bot_decision(game)

    p = win_probability(game)
    game["graph"].append(p)

    game["day"] += 1
    if game["day"] > 10:
        return {"end": True, "graph": game["graph"]}

    return {"day": game["day"], "p": p}
