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
			aboutMe: string;
			experiences: array<Experience>;
		};

		type Experience = {
			name: string;
			imgUrl: string;
			description: string;
		};
	}
}

export {};
