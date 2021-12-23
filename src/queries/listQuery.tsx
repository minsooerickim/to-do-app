import { listQuery } from '../__generated__/listQuery.graphql'

import { graphql, useQueryLoader, usePreloadedQuery, PreloadedQuery } from 'react-relay';
import { Suspense, useEffect } from 'react';

type Props = {
    appQueryRef: PreloadedQuery<listQuery>,
};

export default function App() {
    const appQuery = graphql`
    query listQuery {
        list { title }        
    }`

    function Header({ appQueryRef }: Props ) {
        const data = usePreloadedQuery(appQuery, appQueryRef)
        
        return(
            <div>
                {data.list!.map((task, i) => {     
                    console.log(task?.title)
                    return <p key={i}>{i+1}. {task?.title}</p> 
                })}
            </div>
        )
    }
    const [appQueryRef, load] = useQueryLoader<listQuery>(appQuery);
    useEffect(() => {
      load({
        title: "hello"
      })
    }, [])

    if (appQueryRef == null) {
        return (
            <p>no existing tasks</p>
        )
    }

    return (
        <Suspense fallback="Loading...">
            <Header appQueryRef={appQueryRef}/>
        </Suspense>
    )
}

