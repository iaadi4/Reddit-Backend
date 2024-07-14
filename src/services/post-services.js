const { PostRepository, FlairRepository } = require('../repository/index');

class PostService {

    constructor() {
        this.postRepository = new PostRepository();
        this.flairRepository = new FlairRepository();
    }

    async create(data) {
        const content = data.content;
        let flairs = content.match(/#['a-z0-9_']+/g);
        flairs = flairs.map((flair) => flair.substring(1)).map((flair) => flair.toLowerCase());
        const post = await this.postRepository.create(data);
        let alreadyPresentFlairs = await this.flairRepository.getByName(flairs);
        let titleOfPresentTags = alreadyPresentFlairs.map((flair) => flair.title);
        let newFlairs = flairs.filter(flair => !titleOfPresentTags.includes(flair));
        newFlairs = newFlairs.map(flair => {
            return {
                title: flair,
                posts: post.id
            };
        });
        await this.flairRepository.bulkCreate(newFlairs);
        alreadyPresentFlairs.forEach((flair) => {
            flair.posts.push(post.id);
            flair.save();
        })
        return post;
    }

    async get(postId) {
        const post = await this.postRepository.getWithComments(postId);
        return post;
    }
}

module.exports = PostService;