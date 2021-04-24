package com.example.springtemplate.models;

public enum Topic {
    COMPUTER_SCIENCE,
    ART,
    HISTORY,
    SPORT,
    SCIENCE;

    public Topic getTopicFromString(String topic) {
        switch (topic) {
            case "COMPUTER_SCIENCE":
                return COMPUTER_SCIENCE;
            case "ART":
                return ART;
            case "HISTORY":
                return HISTORY;
            case "SPORT":
                
        }
    }
}
