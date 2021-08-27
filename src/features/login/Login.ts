import { Vue } from 'vue-class-component';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';
import { useSQLite } from 'vue-sqlite-hook/dist';

const sqlite: { echo: any, createConnection: (arg0: string) => any, closeConnection: any} = useSQLite({});

export default class LoginComponent extends Vue {
  status = '';

  async createDb(): Promise<void> {
    try {
      const capLite = new SQLiteConnection(CapacitorSQLite);
      const db = await capLite.createConnection('pkzinspector', false, 'no-encryption', 1);
      await db.open();
      await db.close();
    } catch (error: unknown) {
      this.status = <string>error;
    }
  }

  async createDb2(): Promise<void> {
    try {
      const db = await sqlite.createConnection('pkzinspector2');
      await db.open();
      await db.close();
    } catch (error: unknown) {
      this.status = <string>error;
    }
  }
}
