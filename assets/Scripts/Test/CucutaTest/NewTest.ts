import { _decorator, Component, Node } from 'cc';
import { CucutaTestBase, CustomMeshData } from './CucutaTestBase';
const { ccclass, property } = _decorator;

@ccclass('NewTest')
export class NewTest extends CucutaTestBase {
    start() {

    }

    update(deltaTime: number) {
        
    }

    count_chars_of_cucutatest_word_test():[boolean,string,CustomMeshData?]{
        let successful:string = "cucutatest word has exactly 11 chars"
        let failed:string = "cucutatest word has not exactly 11 chars"
        let result:boolean = "cucutatest".split("").length==11
        return [result, result?successful:failed]
    }
}


