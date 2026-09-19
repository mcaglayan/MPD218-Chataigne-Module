function ccEvent(channel, number, value) {
    if (channel == 1 && number == 3) {
        local.values.knobs.knob1.set(value / 127.0);
    }
}
