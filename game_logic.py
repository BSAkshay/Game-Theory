import random
import numpy as np

DAYS = 10
PEOPLE_PER_MINISTRY = 20

POWER_MATRIX = {
    "A": {"A": 0.5, "B": 0.3, "C": 0.7},
    "B": {"A": 0.7, "B": 0.5, "C": 0.3},
    "C": {"A": 0.3, "B": 0.7, "C": 0.5},
}

def effective_power(choice_a, choice_b):
    return POWER_MATRIX[choice_a][choice_b]

def win_probability(state):
    def eff(p):
        I = 1 / (p["belief_variance"] + 1e-6)
        return p["military"] * (1 + 0.6 * np.sqrt(I))

    ea = eff(state["players"][0])
    eb = eff(state["players"][1])
    return ea / (ea + eb)
