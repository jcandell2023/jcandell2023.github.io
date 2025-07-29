// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Data {
		type SiteData = {
			aboutMe: AboutMe;
			experiences: Experiences;
			projects: array<Project>;
		};

		type Experiences = {
			technical: array<Experience>;
			personal: array<Experience>;
		};

		type Experience = {
			name: string;
			imgUrl: string?;
			role: string;
		};

		type AboutMe = {
			summary: string;
			skills: array<string>;
		};

		type Project = {
			name: string;
		};
	}
}

export {};
