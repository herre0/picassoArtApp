export class Menu {
    name: string;
    isActive: boolean;
    isAdmin: boolean;
    color: string;
    href: string;  

    constructor(name, isActive, isAdmin, color, href) {
        this.name = name;
        this.isActive = isActive;
        this.isAdmin = isAdmin;
        this.color = color;
        this.href = href;
    }
  }