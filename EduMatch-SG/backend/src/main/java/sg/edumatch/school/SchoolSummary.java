package sg.edumatch.school;

public record SchoolSummary(
        String schoolId,
        String name,
        String town,
        String address,
        int lowestAl,
        int highestAl,
        String dataLabel
) {
}
