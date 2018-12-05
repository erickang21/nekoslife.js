import * as superagent from "superagent";

class Client {

    private static async _get(endpoint: string, query: object = {}): Promise<any> {
        const res: superagent.Response = await superagent.get(`https://nekos.life/api/v2/${endpoint}`)
          .query(query)
        return res.body;
    }

    public static async femdom(): Promise<string> {
      const res: any = await this._get("img/femdom");
      return res.url;
    }

    public static async tickle(): Promise<string> {
      const res: any = await this._get("img/tickle");
      return res.url
    }

    public static async classic(): Promise<string> {
      const res: any = await this._get("img/classic");
      return res.url
    }

    public static async ngif(): Promise<string> {
      const res: any = await this._get("img/ngif");
      return res.url
    }

    public static async erofeet(): Promise<string> {
      const res: any = await this._get("img/erofeet");
      return res.url
    }

    public static async meow(): Promise<string> {
      const res: any = await this._get("img/meow");
      return res.url
    }

    public static async erok(): Promise<string> {
      const res: any = await this._get("img/erok");
      return res.url
    }

    public static async poke(): Promise<string> {
      const res: any = await this._get("img/poke");
      return res.url
    }

    public static async les(): Promise<string> {
      const res: any = await this._get("img/les");
      return res.url
    }

    public static async hololewd(): Promise<string> {
      const res: any = await this._get("img/hololewd");
      return res.url
    }

    public static async lewdk(): Promise<string> {
      const res: any = await this._get("img/lewdk");
      return res.url
    }

    public static async keta(): Promise<string> {
      const res: any = await this._get("img/keta");
      return res.url
    }

    public static async feetg(): Promise<string> {
      const res: any = await this._get("img/feetg");
      return res.url
    }

    public static async nsfw_neko_gif(): Promise<string> {
      const res: any = await this._get("img/nsfw_neko_gif");
      return res.url
    }

    public static async eroyuri(): Promise<string> {
      const res: any = await this._get("img/eroyuri");
      return res.url
    }

    public static async kiss(): Promise<string> {
      const res: any = await this._get("img/kiss");
      return res.url
    }

    public static async eightball(): Promise<string> {
      const res: any = await this._get("img/8ball");
      return res.url
    }


    public static async kuni(): Promise<string> {
      const res: any = await this._get("img/kuni");
      return res.url
    }

    public static async tits(): Promise<string> {
      const res: any = await this._get("img/tits");
      return res.url
    }

    public static async pussy_jpg(): Promise<string> {
      const res: any = await this._get("img/pussy_jpg");
      return res.url
    }

    public static async cum_jpg(): Promise<string> {
      const res: any = await this._get("img/cum_jpg");
      return res.url
    }

    public static async pussy(): Promise<string> {
      const res: any = await this._get("img/pussy");
      return res.url
    }

    public static async lewdkemo(): Promise<string> {
      const res: any = await this._get("img/lewdkemo");
      return res.url
    }

    public static async lizard(): Promise<string> {
      const res: any = await this._get("img/lizard");
      return res.url
    }

    public static async slap(): Promise<string> {
      const res: any = await this._get("img/slap");
      return res.url
    }

    public static async lewd(): Promise<string> {
      const res: any = await this._get("img/lewd");
      return res.url
    }

    public static async cum(): Promise<string> {
      const res: any = await this._get("img/cum");
      return res.url
    }

    public static async cuddle(): Promise<string> {
      const res: any = await this._get("img/cuddle");
      return res.url
    }

    public static async spank(): Promise<string> {
      const res: any = await this._get("img/spank");
      return res.url
    }

    public static async smallboobs(): Promise<string> {
      const res: any = await this._get("img/smallboobs");
      return res.url
    }

    public static async Random_hentai_gif(): Promise<string> {
      const res: any = await this._get("img/Random_hentai_gif");
      return res.url
    }

    public static async avatar(): Promise<string> {
      const res: any = await this._get("img/avatar");
      return res.url
    }

    public static async fox_girl(): Promise<string> {
      const res: any = await this._get("img/fox_girl");
      return res.url
    }

    public static async nsfw_avatar(): Promise<string> {
      const res: any = await this._get("img/nsfw_avatar");
      return res.url
    }

    public static async hug(): Promise<string> {
      const res: any = await this._get("img/hug");
      return res.url
    }

    public static async gecg(): Promise<string> {
      const res: any = await this._get("img/gecg");
      return res.url
    }

    public static async boobs(): Promise<string> {
      const res: any = await this._get("img/boobs");
      return res.url
    }

    public static async pat(): Promise<string> {
      const res: any = await this._get("img/pat");
      return res.url
    }

    public static async feet(): Promise<string> {
      const res: any = await this._get("img/feet");
      return res.url
    }

    public static async smug(): Promise<string> {
      const res: any = await this._get("img/smug");
      return res.url
    }

    public static async kemonomimi(): Promise<string> {
      const res: any = await this._get("img/kemonomimi");
      return res.url
    }

    public static async solog(): Promise<string> {
      const res: any = await this._get("img/solog");
      return res.url
    }

    public static async holo(): Promise<string> {
      const res: any = await this._get("img/holo");
      return res.url
    }

    public static async wallpaper(): Promise<string> {
      const res: any = await this._get("img/wallpaper");
      return res.url
    }

    public static async bj(): Promise<string> {
      const res: any = await this._get("img/bj");
      return res.url
    }

    public static async woof(): Promise<string> {
      const res: any = await this._get("img/woof");
      return res.url
    }

    public static async yuri(): Promise<string> {
      const res: any = await this._get("img/yuri");
      return res.url
    }

    public static async trap(): Promise<string> {
      const res: any = await this._get("img/trap");
      return res.url
    }

    public static async anal(): Promise<string> {
      const res: any = await this._get("img/anal");
      return res.url
    }

    public static async baka(): Promise<string> {
      const res: any = await this._get("img/baka");
      return res.url
    }

    public static async blowjob(): Promise<string> {
      const res: any = await this._get("img/blowjob");
      return res.url
    }

    public static async holoero(): Promise<string> {
      const res: any = await this._get("img/holoero");
      return res.url
    }
    
    public static async feed(): Promise<string> {
      const res: any = await this._get("img/feed");
      return res.url
    }

    public static async neko(): Promise<string> {
      const res: any = await this._get("img/neko");
      return res.url
    }

    public static async gasm(): Promise<string> {
      const res: any = await this._get("img/gasm");
      return res.url
    }

    public static async hentai(): Promise<string> {
      const res: any = await this._get("img/hentai");
      return res.url
    }

    public static async futunari(): Promise<string> {
      const res: any = await this._get("img/futunari");
      return res.url
    }

    public static async ero(): Promise<string> {
      const res: any = await this._get("img/ero");
      return res.url
    }

    public static async solo(): Promise<string> {
      const res: any = await this._get("img/solo");
      return res.url
    }
    
    public static async waifu(): Promise<string> {
      const res: any = await this._get("img/waifu");
      return res.url
    }

    public static async pwankg(): Promise<string> {
      const res: any = await this._get("img/pwankg");
      return res.url
    }
    
    public static async eron(): Promise<string> {
      const res: any = await this._get("img/eron");
      return res.url
    }

    public static async erokemo(): Promise<string> {
      const res: any = await this._get("img/erokemo");
      return res.url
    }
}

export = Client;