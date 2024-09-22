declare global {
  namespace iStore {
    interface VacancyState {
      state: iVacancy;
    }
    interface iVacancy {
      name: string;
      salary: string;
      experience: string;
      employment: string;
      duties: array;
      requirements: array;
      conditions: array;
    }
    interface NewsState {
      state: iNews;
    }
    interface iNews {
      title: string;
      description: string;
      date: string;
    }
    interface AppState {
      state: iApp;
    }
    interface iApp {
      mobileMenu: boolean;
    }
    interface projectState {
      state: iProject;
    }
    interface iProject {
      name: string;
      description: string;
      img: string;
      url: string;
    }
    interface documentState {
      state: iDocument;
    }
    interface iDocument {
      name: string;
      url: string;
      image: string;
    }
  }
}

export { VacancyState, NewsState, AppState, projectState, documentState };
