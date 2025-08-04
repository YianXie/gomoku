from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Game(models.Model):
    player1 = models.ForeignKey(
        User, related_name="game_as_player1", on_delete=models.CASCADE
    )
    player2 = models.ForeignKey(
        User, related_name="game_as_player2", on_delete=models.CASCADE
    )
    board_size = models.IntegerField(default=15)
    created_at = models.DateTimeField(auto_now_add=True)
    moves = models.JSONField(default=list)  # Store moves as a list of tuples (x, y)

    def __str__(self):
        return f"Game between {self.player1.username} and {self.player2.username} on {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}"
