def solution(post):
  height = len(pot)
  width = len(pot[0])

  if height == 1 and width == 1 and pot[0][0] == 1:
    return False

  gaps = []
  for i in range(height):
    gaps[i] = []
    for j in range(width):
      if pot[i][j] == 0:
        gaps[i].append(j)

  # UNFINISHED
  # return reduce(, gaps)