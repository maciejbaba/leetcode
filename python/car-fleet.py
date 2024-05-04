from typing import List

class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [(p, s) for p, s in zip(position, speed)]
        print(pair)
        pair.sort(reverse=True)
        print(pair)
        stack = []
        for p, s in pair:
            print("position", p,"speed", s)
            stack.append((target - p) / s)
            print("target", target)
            print("position", p)
            print("(target - p) / s", (target - p) / s)
            print("stack", stack)
            if len(stack) >= 2 and stack[-1] <= stack [-2]:
                stack.pop()
        return len(stack)

