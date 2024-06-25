type Roster = Record<number, string[]>

export class GradeSchool {
  private schoolRoster: Roster = {}
  private students = new Map<string, number>()

  roster(): Roster {
    return structuredClone(this.schoolRoster)
  }

  public add(studentName: string, grade: number): void {
    const previousGrade = this.students.get(studentName)
    if (previousGrade !== undefined && this.schoolRoster[previousGrade]) {
      this.schoolRoster[previousGrade] = this.schoolRoster[previousGrade].filter((student) => student !== studentName)
    }
    this.schoolRoster[grade] = [...(this.schoolRoster[grade] ?? []), studentName].sort()
    this.students.set(studentName, grade)
  }

  grade(grade: number): string[] {
    return structuredClone(this.schoolRoster[grade] ?? [])
  }
}