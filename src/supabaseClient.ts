import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string
class subabaseClass {
    supabase;
    constructor(){
        this.supabase = createClient(supabaseUrl, supabaseAnonKey)
        console.log('subabase connected')
    }
}
const supabase = new subabaseClass()

export const db = supabase
