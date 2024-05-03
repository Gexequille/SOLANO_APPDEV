export class Anime {
    id: string;
    title: string;
    episodes: number;
    isOngoing: boolean;
    genres: string[];
    rating: number;
    released: Date;

    constructor(id: string = '', title: string = '', episodes: number = 0, isOngoing: boolean = false, genres: string[] = [], rating: number = 0, released: Date = new Date()) {
        this.id = id;
        this.title = title;
        this.episodes = episodes;
        this.isOngoing = isOngoing;
        this.genres = genres;
        this.rating = rating;
        this.released = released;
    }
}

export interface iAnime {
    id: string;
    title: string;
    episodes: number;
    isOngoing: boolean;
    genres: string[];
    rating: number;
    released: Date;
}
