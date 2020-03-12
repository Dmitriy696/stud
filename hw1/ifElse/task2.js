function point(x, y) {

if (x == 0 && y == 0)
return ('The point is zero');
else if (x < 0 && y > 0)
return ('The first quarter');
else if (x > 0 && y > 0)
return ('The second quarter');
else if (x > 0 && y < 0)
return ('The third quarter');
else if (x < 0 && y < 0)
return ('The fourth quarter');
else if (x == 0 && y != 0)
return ('The point is on y-axis');
else if (x != 0 && y == 0)
return ('The point is on x-axis');
}