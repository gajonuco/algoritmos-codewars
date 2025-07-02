import sys
import os

# Adiciona o diretório 'src' ao sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

import pytest
from split_string import split_string

def basic_test_case():
    assert split_string("asdfadsf")== (['as', 'df', 'ad', 'sf'])
    assert split_string("asdfads") ==['as', 'df', 'ad', 's_']
    assert split_string("") == ([])
    assert split_string("x") == (["x_"])
