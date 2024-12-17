import conf from '../conf/conf';
import {Client, Account, ID, Storage, Databases, Query} from 'appwrite';

export class Service{
client = new Client();
account;
databases;
storage;

constructor(){
    this.client.
        setEndpoint(conf.appwriteUrl).
        setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases= new Databases(this.client);
    this.storage= new Storage(this.client);
}

async createPost({title, slug, content, featuredImage, status, userId}){
  try {
    return await this.databases.createDocument(
      conf.appwriteUrlDatabaseId,
      conf.appwriteUrlCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        userId,
    });
  } catch (error) {
    console.log('Appwrite issue: databases: createPost');
    return false;
  };
}

  async updatePost(slug, {title, content, featuredImage, status}){
    try {
      return await this.databases.updateDocument(
        conf.appwriteUrlDatabaseId,
        conf.appwriteUrlCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
      });
    } catch (error) {
      console.log('Appwrite issue: databases: updatePost');
      return false;
    }
  }

  async deletePost(slug){
    try {
      return await this.databases.deleteDocument(
        conf.appwriteUrlDatabaseId,
        conf.appwriteUrlCollectionId,
        slug);
    } catch (error) {
      console.log('Appwrite issue: databases: deletePost');
      return false;
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteUrlDatabaseId, 
        conf.appwriteUrlCollectionId,
        slug);
    } catch (error) {
      console.log('Appwrite issue: databases: getPost');
      return false;
    }
  }

  async getPosts(queries= [Query.equal('status', 'active')]){
    try {
      return this.databases.listDocuments(
        conf.appwriteUrlDatabaseId, 
        conf.appwriteUrlCollectionId,
        queries,
      )
    } catch (error) {
      console.log('Appwrite issue: databases: getPosts');
      return false;
    }
  }

  //file upload service
  async uploadFile(file){
    try {
      return await this.storage.createFile(
        conf.appwriteUrlBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log('Appwrite issue: databases: uploadFile');
      return false;
    }
  }

  async deleteFilesss(fileId){
    try {
      return await this.storage.deleteFile(
        conf.appwriteUrlBucketId,
        fileId
      );
      return true;
    } catch (error) {
      console.log('Appwrite issue: databases: deleteFile');
      return false;
    }
  }

  filePreview(fileId){
    try {
      this.storage.getFilePreview(
        conf.appwriteUrlBucketId,
        fileId,
      );
    } catch (error) {
      console.log('Appwrite issue: databases: filePreview');
      return false;
    }
  }


};



const service = new Service();
export default service;
