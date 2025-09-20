function solve (object) {
    if (!object.dizziness) {
        return object;
    }

    object.levelOfHydrated += object.weight * 0.1 * object.experience;
    object.dizziness = false;

    return object;
}
solve({ weight: 80,

experience: 1,

levelOfHydrated: 0,

dizziness: true });