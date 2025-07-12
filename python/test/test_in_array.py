import sys
import os

# Adiciona o diretório 'src' ao sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

import pytest
from in_array import in_array

def basic_test():
    assert in_array( ["live", "arp", "strong"] , ["lively", "alive", "harp", "sharp", "armstrong"]) == ['arp', 'live', 'strong']