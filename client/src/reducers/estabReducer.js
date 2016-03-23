import { UPDATE_ALL, ADD_VOTE, ADD_ESTABS } from '../actions/constants';
import Immutable from 'immutable';

 const INITIAL_STATE = {establishments:{}};//{
  // establishments: Map()
// };

export default function (state = INITIAL_STATE, action) {
  // console.log("in estab reducer PAYLOAD",action.payload);
  switch (action.type) {
    case ADD_VOTE:
      //action.payload {establishmentId, traitId,userId,voteValue,time}
      // state.updateIn(['establishments',
      //                 action.payload.establishmentId, 
      //                 'votes', 
                      // action.payload.traitId,'realtime'], list => list.push(Immutable.Map(voteValue:action.payload.voteValue, time: action.payload.time));
    // Map { establishments: Map {id: Map { name: String, yelpId: String, ..., votes: Map {traidId1: Map {totalPosPct: Number, realtime: List [Map {voteValue: Number, time: datetime}, 
    //                                                                                                                                         Map {voteValue: Number, time: datetime}...]},
    //                                                                                     traidId2: Map {totalPosPct: Number, realtime: List [Map {voteValue: Number, time: datetime}, 
    //                                                                                                                                         Map {voteValue: Number, time: datetime}...]},

    case ADD_ESTABS:
      return action.payload;
    default:
      return state;
  }
}

