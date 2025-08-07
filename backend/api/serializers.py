from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Game


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "email"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print("validated_data:", validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ["id", "player1", "player2", "board_size", "created_at", "moves"]
        read_only_fields = ["created_at"]
        extra_kwargs = {
            "player1": {"required": True},
            "player2": {"required": True},
            "board_size": {"default": 15},
            "moves": {"default": list},
        }
