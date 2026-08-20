import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import {
  resumeProfile,
  resumeSummary,
  resumeSkills,
  resumeExperience,
  resumeEducation,
} from "@/lib/resume-data";
import { formatDateRange, getEducationDateRange } from "@/lib/resume-utils";

const RULE_COLOR = "#b39ddb";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 10.5,
    color: "#1a1a1a",
    lineHeight: 1.35,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 1,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 1,
  },
  contactLine: {
    fontSize: 9.5,
    textAlign: "center",
    marginTop: 6,
  },
  linksLine: {
    fontSize: 9.5,
    textAlign: "center",
    marginTop: 2,
    color: "#1a1a1a",
  },
  headerRule: {
    borderBottomWidth: 1.5,
    borderBottomColor: RULE_COLOR,
    marginTop: 12,
    marginBottom: 12,
  },
  sectionRule: {
    borderBottomWidth: 1,
    borderBottomColor: RULE_COLOR,
    marginTop: 10,
    marginBottom: 10,
  },
  sectionHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
  },
  bodyText: {
    marginTop: 6,
    textAlign: "justify",
  },
  skillsText: {
    marginTop: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  boldText: {
    fontFamily: "Helvetica-Bold",
  },
  roleLine: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    marginTop: 8,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    marginTop: 8,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 3,
    paddingLeft: 12,
  },
  bulletDot: {
    width: 10,
  },
  bulletText: {
    flex: 1,
    textAlign: "justify",
  },
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  eduDegree: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  eduDates: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  eduSchool: {
    marginTop: 2,
  },
});

export function ResumeDocument() {
  return (
    <Document
      title={`${resumeProfile.name} - Resume`}
      author={resumeProfile.name}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{resumeProfile.name.toUpperCase()}</Text>
        <Text style={styles.title}>{resumeProfile.title}</Text>
        <Text style={styles.contactLine}>
          {resumeProfile.email} | {resumeProfile.phone} | {resumeProfile.location}
        </Text>
        <Text style={styles.linksLine}>
          <Link src={resumeProfile.github} style={{ color: "#1a1a1a" }}>
            {resumeProfile.githubLabel}
          </Link>
          {"  |  "}
          <Link src={resumeProfile.linkedin} style={{ color: "#1a1a1a" }}>
            {resumeProfile.linkedinLabel}
          </Link>
        </Text>

        <View style={styles.headerRule} />

        <Text style={styles.sectionHeading}>SUMMARY</Text>
        <Text style={styles.bodyText}>{resumeSummary}</Text>

        <View style={styles.sectionRule} />

        <Text style={styles.sectionHeading}>SKILLS</Text>
        <Text style={styles.skillsText}>{resumeSkills.join(", ")}.</Text>

        <View style={styles.sectionRule} />

        <Text style={styles.sectionHeading}>WORK EXPERIENCE</Text>
        {resumeExperience.map((exp) => (
          <View key={`${exp.company}-${exp.role}`}>
            <View style={styles.row}>
              <Text style={styles.roleLine}>
                {exp.role}, {exp.company}
              </Text>
              <Text style={styles.roleLine}>
                {formatDateRange(exp.startDate, exp.endDate)}
              </Text>
            </View>
            {exp.projects.map((project) => (
              <View key={project.name}>
                <Text style={styles.projectName}>{project.name}</Text>
                {project.bullets.map((bullet, i) => (
                  <View key={i} style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>{"•"}</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}

        <View style={styles.sectionRule} />

        <Text style={styles.sectionHeading}>EDUCATION</Text>
        {resumeEducation.map((edu) => (
          <View key={edu.degree}>
            <View style={styles.eduRow}>
              <Text style={styles.eduDegree}>{edu.degree}</Text>
              <Text style={styles.eduDates}>{getEducationDateRange(edu)}</Text>
            </View>
            <Text style={styles.eduSchool}>{edu.school}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
