import { Module, MutationTree, GetterTree } from 'vuex';

export interface MemberProps {
    id: number;
    name: string;
    createdAt: Date;
}
class Member implements MemberProps {
    id = 0;
    name = "dafssdaf";
    createdAt = new Date();
}

const mutations: MutationTree<MemberProps> = {
  setName: function (state: MemberProps, changedName: string) {
    state.name = changedName;
  },
};


const getters: GetterTree<MemberProps, unknown> = {
    getName: function (state: MemberProps): string {
        return state.name;
    }
};

const memberModule: Module<MemberProps, any> = {
  namespaced: true,
  state: new Member(),
  getters,
  mutations,
};

export default memberModule;