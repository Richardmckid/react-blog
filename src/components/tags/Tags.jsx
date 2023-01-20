import { useEffect, useState } from "react"
import { supabase } from "../../supabase/supabaseClient"
import Tag from "./Tag"


const Tags = () => {

    
     
      

    const [tags, setTags] = useState([])

    const getTags = async () => {

        try {
            const { data, error } = await supabase.from('Posts').select('Tags(title)')

            if(data){
                let temp = []
                let final = []


                const tmp = data.map(el => {
                   temp.push({title: el.Tags.title, count: 1})
                    
                })

                const unique = [...new Set(temp.map(item => item.title))]
                unique.map(el => final.push({title: el, count: 0}))


                temp.map(item => {

                    var foundIndex = final.findIndex(x => x.title == item.title);
                    final[foundIndex].count = final[foundIndex].count + 1
                   
                })

                setTags(final)
                


            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getTags()
    },[])

    return (
        <>
            {
                tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))
            }
        </>
    )
}

export default Tags
