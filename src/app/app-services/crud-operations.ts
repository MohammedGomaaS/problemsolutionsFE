import { Observable } from "rxjs";

export interface CrudOpertions {
    create():Observable<any>;
    update():Observable<any>;
    search():Observable<any>;
    getById():Observable<any>;
    delete():Observable<any>;
}
