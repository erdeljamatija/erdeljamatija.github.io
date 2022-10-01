import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getTests() {
    let { data, error } = await this.supabase
      .from('test')
      .select('*')

    return { data, error };
  }

  get user() {
    return this.supabase.auth.user();
  }

  get session() {
    return this.supabase.auth.session();
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }
}