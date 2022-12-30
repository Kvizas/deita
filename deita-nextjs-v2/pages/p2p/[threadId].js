import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import ThreadHeader from '../../components/thread-header/thread-header';
import ThreadPost from '../../components/thread-post/thread-post';

import pb from "../../helpers/pocketbase";

export default function ThreadPage() {

    const [thread, setThread] = useState()
    const [isThreadLoading, setIsThreadLoading] = useState(true)

    const [posts, setPosts] = useState()
    const [isPostsLoading, setIsPostsLoading] = useState(true)

    const router = useRouter();
    const { threadId } = router.query;

    useEffect(() => {

        if (!threadId) return;

        pb.collection('threads').getFirstListItem(`slug = "${threadId}"`, {
            expand: 'posts'
        }).then(data => {
            setThread(() => {
                setIsThreadLoading(false);
                console.log(data)
                return data;
            })
        }).catch(data => {
            setIsThreadLoading(false);
            console.log(data);
        })

    }, [threadId])


    return (
        <>
            <Navbar></Navbar>
            {
                isThreadLoading ?
                    <section>Loading thread</section>

                    :
                    !isThreadLoading && thread == undefined ?
                        <section>Error getting threads</section>

                        :
                        <section>
                            <ThreadHeader thread={thread}></ThreadHeader>
                            <ThreadPost post={thread.authorPost}></ThreadPost>

                            {isPostsLoading ?
                                <div>Loading comments</div>

                                :
                                !isPostsLoading && posts == undefined ?
                                    <div>Error getting comments</div>

                                    :
                                    posts.map(post => <ThreadPost post={post}></ThreadPost>)
                            }
                        </section>
            }
            <Footer></Footer>
        </>
    )
}
