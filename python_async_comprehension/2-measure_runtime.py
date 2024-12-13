#!/usr/bin/env python3
"""
This module defines the measure_runtime coroutine.
It evaluates the time taken to execute async_comprehension multiple times in parallel.
"""

import asyncio
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Calculate the time required to execute the async_comprehension coroutine four times concurrently using asyncio.gather.
    Returns:
        The total elapsed time in seconds as a floating-point number.
    """
    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.perf_counter()
    return end_time - start_time
