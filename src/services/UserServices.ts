import type { FormDataInterface } from '@/utils/types'

class UserServices {
  createUser(formData: FormDataInterface) {
    // localStorage.clear();
    const checkStorage = localStorage.getItem('users');
    if (typeof checkStorage != 'string') return;
    const parsedStorage: FormDataInterface[] = JSON.parse(checkStorage);
    this.createUsersInStorage()
    try {
      const newData = formData
      newData.id = this.generateId()
      parsedStorage.push(newData)
      localStorage.setItem('users', JSON.stringify(parsedStorage))
    } catch (err) {
      return new Error()
    }
  }

  generateId() {
    return Math.round(Math.random() * 10000)
  }

  createUsersInStorage() {
    localStorage.setItem('users', JSON.stringify([]))
  }
}

export const userServices = new UserServices()
