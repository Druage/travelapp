export interface GroupMember {
    id: number;
    name: string;
}

export class GroupMemberService {

    tempGroupMembers: GroupMember[] = [
        {id: 1, name: 'Wade Cooper'},
        {id: 2, name: 'Arlene Mccoy'},
        {id: 3, name: 'Devon Webb'},
        {id: 4, name: 'Tom Cook'},
        {id: 5, name: 'Tanya Fox'},
        {id: 6, name: 'Hellen Schmidt'},
        {id: 7, name: 'Caroline Schultz'},
        {id: 8, name: 'Mason Heaney'},
        {id: 9, name: 'Claudie Smitham'},
        {id: 10, name: 'Emil Schaefer'},
    ]


    getGroupMembers(): GroupMember[] {
        return this.tempGroupMembers;
    }

}

const groupMemberService = new GroupMemberService();
export {groupMemberService}
