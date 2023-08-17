const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function DeletePost(_id) {
    let token = localStorage.getItem("token")
    const deletePosts = async (_id) => {
        try {
            console.log(_id);
            const response = await fetch(`${BASE_URL}/posts/${_id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const deletedPost = await response.json();
            console.log(deletedPost);
            return deletedPost
        } catch (err) {
            console.error(err)
        }
    };

    deletePosts(_id)
}