import random

def bot_decision(state):
    belief = state["players"][1]["belief_variance"]
    if belief < 0.4:
        return random.choice(["A", "B", "C"])
    return random.choice(["A", "B", "C"])
