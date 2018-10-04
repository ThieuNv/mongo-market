import {SocialMedia} from './social-media.model';

export class Manager {
  constructor(public username?: string, public gender?: string,
              public role?: string[], public about?: string,
              public socialMedia?: SocialMedia, public slogan?: string
  ) { }
}
