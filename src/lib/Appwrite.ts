import {config} from '../../appconfig/AppConfig'
import { Client, Account } from 'appwrite'

export const client = new Client()

client.setEndpoint(config.APPWRITE_ENDPOINT).setProject( config.APPWRITE_PROJECT_ID)

export const account = new Account(client)
export {ID} from 'appwrite'