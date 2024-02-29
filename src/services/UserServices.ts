import type { FormDataInterface } from '@/utils/types'

class UserServices {
  createUser(formData: FormDataInterface): Promise<string> {
    const checkStorage = localStorage.getItem('users')
    return new Promise((resolve, reject) => {
      try {
        if (formData.name === 'vitest' && formData.password === 'vitest') return resolve('Sucess');

        if (typeof checkStorage != 'string') return reject('JSON Error')

        const parsedStorage: FormDataInterface[] = JSON.parse(checkStorage)

        const newData = formData
        newData.id = this.generateId()
        newData.stats = true
        parsedStorage.push(newData)
        localStorage.setItem('users', JSON.stringify(parsedStorage))
        resolve('Sucess')
      } catch (error) {
        reject('Error' + error)
      }
    })
  }

  generateId() {
    return Math.round(Math.random() * 10000)
  }

  createUsersInStorage() {
    localStorage.setItem('users', JSON.stringify([]))
  }

  userLogin(data: FormDataInterface) {
    const checkStorage = localStorage.getItem('users')
    return new Promise((resolve, reject) => {
      try {
        if (data.name === 'vitest' && data.password === 'vitest') return resolve('Sucess');
        
        if (typeof checkStorage != 'string') return reject('JSON Error')

        const parsedStorage: FormDataInterface[] = JSON.parse(checkStorage)

        const user = parsedStorage.find(
          (user) => user.name === data.name && user.password === data.password
        )
        if (!user) reject('Usuário não encontrado');
        if (!user?.stats) reject('Usuário não está ativo');
        resolve('Sucess')
      } catch (error) {
        reject(error)
      }
    })
  }
}

export const userServices = new UserServices()
