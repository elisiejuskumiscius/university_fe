interface StudyProgram {
  id: number;
  title: string;
  modules: number[];
}

interface Module {
  id: number;
  title: string;
}

interface University {
  id: number;
  code: string;
  title: string;
  numberOfStudyPrograms: number;
  numberOfModules: number;
  studyPrograms: StudyProgram[];
  modules: Module[];
}
