#!/usr/bin/env python3
"""
Module for async_generator coroutine.
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Generate 10 random numbers between 0 and 10 asynchronously.
    Each number is yielded as a random float.
    """

    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
