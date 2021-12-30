import * as R from "ramda"
import * as RA from "ramda-adjunct"

///this file is a mess. pls fix
/*export function getClone(mode = false, idList = []) {
    return cloneObject(this.$toJson(), mode, idList)
}*/

/** FUNCTIONS ORM * */
import {ProductInstanceBase} from "./models";

/**
 * getEntity
 * @param {model} instance -Model or Instance of vuex-orm model
 * @return {object} - returns object containing {entity,baseEntity}
 */
export function getEntity(instance) {
    if (instance && instance.entity) {
        return {entity: instance.entity, baseEntity: (instance.baseEntity) ? instance.baseEntity : false}
    }
    if (instance && instance.constructor) {
        const {entity, baseEntity} = instance.constructor
        return {entity, baseEntity}
    }
    return false
}

//get model by string or instance.
//store ref is a THHIS from any component
export function getModel(instance = false, store_ref = false, key = "entity") {  //other 'baseEntity'
    if (!instance) return
    let entityString = false;
    if (R.is(Object, instance)) {
        entityString = (getEntity(instance) && getEntity(instance)[key]) ? getEntity(instance)[key] : false
        return instance.$store().$db().model(entityString);
    } else if (R.is(String, instance)) entityString = instance; //is string
    if (!entityString || !store_ref) return false
    const db = (store_ref.$store)
        ? store_ref.$store.$db() :
        (store_ref.$db()) ? store_ref.$db() : false
    if (db) return store_ref.$store.$db().model(entityString);
}

/* store.dispatch('entities/update', {
     entity: 'users',
     where: 2,
     data: { age: 24 }
 })*/
export function updateWhereID(where = {}, values = false) {
    if (!values || R.isEmpty(where)) return false;
    const predWhere = R.whereEq(where);
    //todoL    ??????????
    ProductInstanceBase.update({
        where: (instance) => {
            return predWhere(instance)
        },
        data: {active: true}
    })
}

///DEMO FUNCTION
//MOVE TO ACTION?? wtf??????????
export function updateWhere(where = {}, values = false) {
    if (!values || R.isEmpty(where)) return false;
    const predWhere = R.whereEq(where);
    ProductInstanceBase.update({
        where: (instance) => {
            return predWhere(instance)
        },
        data: {active: true}
    })
}

///** STATIC METHHIDS KEEP!!!!!! */  ////MOVE IDK ????
//DEMO FUNCTION
//REMOVE?
/*export function getProductByObject(where={}) {
    if (  R.isEmpty(where) ) return false;
    const predWhere = R.whereEq(where);
    const user = Product.query()
        .where((_record, query) => {
            return ( predWhere(_record) ) ? _record : false
            // query.where('age', 20).orWhere('id', 1)
        })
        .get()
    console.log("seatching " ,  user)
    return user;
}*/
//this.$store.$db().model('products').query().withAll().first()
