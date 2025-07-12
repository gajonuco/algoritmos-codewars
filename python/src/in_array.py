def in_array(array1, array2):
    
    result = set()
    for sub in array1:
        for full in array2:
            if sub in full:
                result.add(sub)
                break
    return sorted(result)