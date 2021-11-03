export class Course {
  constructor(data) {
    this.id = data?.id || 0;
    this.subjectId = data?.subjectId || 0;
    this.gradeId = data?.gradeId || 0;
    this.name = data?.name || "";
    this.description = data?.description || "";
    this.schedule = data?.schedule || "";
  }
}
