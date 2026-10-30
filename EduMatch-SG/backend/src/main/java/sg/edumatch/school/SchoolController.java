package sg.edumatch.school;

import java.util.List;
import java.util.Locale;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SchoolController {
    private static final List<SchoolSummary> DEMO_SCHOOLS = List.of(
            new SchoolSummary("DEMO-001", "Admiralty Secondary School", "Woodlands",
                    "31 Woodlands Crescent", 16, 22, "Illustrative demo range"),
            new SchoolSummary("DEMO-002", "Ahmad Ibrahim Secondary School", "Yishun",
                    "751 Yishun Avenue 7", 11, 18, "Illustrative demo range"),
            new SchoolSummary("DEMO-003", "Bedok View Secondary School", "Bedok",
                    "6 Bedok South Avenue 3", 13, 22, "Illustrative demo range"),
            new SchoolSummary("DEMO-004", "Clementi Town Secondary School", "Clementi",
                    "10 Clementi Avenue 3", 8, 24, "Illustrative demo range")
    );

    @GetMapping("/health")
    public HealthResponse health() {
        return new HealthResponse("ok", "demo-data");
    }

    @GetMapping("/schools")
    public List<SchoolSummary> searchSchools(
            @RequestParam(defaultValue = "") String query,
            @RequestParam(required = false) Integer psleAl
    ) {
        String normalizedQuery = query.trim().toLowerCase(Locale.ROOT);

        return DEMO_SCHOOLS.stream()
                .filter(school -> normalizedQuery.isBlank()
                        || school.name().toLowerCase(Locale.ROOT).contains(normalizedQuery)
                        || school.town().toLowerCase(Locale.ROOT).contains(normalizedQuery))
                .filter(school -> psleAl == null
                        || (psleAl >= school.lowestAl() && psleAl <= school.highestAl()))
                .toList();
    }

    public record HealthResponse(String status, String dataMode) {
    }
}
