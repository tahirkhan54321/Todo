// represents a single todo object for typescript typing purposes
// .ts file rather than tsx because react uses jsx to render DOMs and there are no
//  DOMs rendered by this class

class TodoModel {
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(rowNumber: number, rowDescription: string, rowAssigned: string) {
        this.rowNumber = rowNumber;
        this.rowDescription = rowDescription;
        this.rowAssigned = rowAssigned;
    }
}