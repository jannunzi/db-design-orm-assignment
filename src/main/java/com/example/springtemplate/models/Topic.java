package com.example.springtemplate.models;

public enum Topic {
    COMPUTER_SCIENCE("COMPUTER_SCIENCE"),
    ART("ART"),
    HISTORY("HISTORY"),
    SPORT("SPORT"),
    SCIENCE("SCIENCE");

    public String description;

    Topic(String s) {
        this.description = s;
    }

    public static Topic getTopicFromString(String topic) {
        switch (topic) {
            case "COMPUTER_SCIENCE":
                return COMPUTER_SCIENCE;
            case "ART":
                return ART;
            case "HISTORY":
                return HISTORY;
            case "SPORT":
                return SPORT;
            case "SCIENCE":
                return SCIENCE;
            default:
                throw new IllegalArgumentException("Invalid Topic!");
        }
    }
}
