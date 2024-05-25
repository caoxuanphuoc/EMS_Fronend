//import { PagedClassResultRequestDto } from "../../Services/Classes/dto/PagedClassResultRequestDto"
//import { useAppDispatch } from "../../redux/hook"
//import { GetAllClassAction } from "../../redux/slices/Classes/ClassesSlice"
const TestPage = () => {
    // const dispatch = useAppDispatch()
    // const hanldeTesting = () => {
    //     // Data
    //     let resgData: PagedClassResultRequestDto = {
    //         maxResultCount: 10,
    //         skipCount: 0
    //     }
    //     //send
    //     dispatch(GetAllClassAction(resgData))
    // }

    return (
        <div>
            <div className="h-[500px] bg-orange-200">
                1
            </div>
            <div className="h-[500px] bg-orange-200">
                2
            </div>
            <div>
                <div className="sticky bot-0 ">A</div>
                <div>
                    <div>
                        <img src="..." />
                        <strong>Andrew Alfred</strong>
                    </div>
                    <div>
                        <img src="..." />
                        <strong>Aisha Houston</strong>
                    </div>
                </div>
            </div>
            <div>
                <div className="sticky bot-0">B</div>
                <div>
                    <div>
                        <img src="..." />
                        <strong>Bob Alfred</strong>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default TestPage