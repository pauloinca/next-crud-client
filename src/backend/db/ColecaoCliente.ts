// import { firebase } from 'firebase';
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import { app, db } from './../config';
import { collection, doc, setDoc, deleteDoc, getDoc, addDoc, getDocs, updateDoc } from "firebase/firestore";

export default class ColecaoCliente implements ClienteRepositorio {

    private conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot, options) {
            const dados = snapshot?.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            // const docRef = doc(db, "clientes", cliente.id).withConverter(this.conversor)
            const docRef = this.docRef(cliente.id)
            await updateDoc(docRef, {
                nome: cliente.nome,
                idade: cliente.idade
            })
        }
        else {
            await addDoc(this.collectionRef(), cliente)
        }

        return cliente
    }

    async excluir(cliente: Cliente): Promise<void> {
        // const docRef = doc(db, "clientes", cliente.id);        
        return deleteDoc(this.docRef(cliente.id));
    }

    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(this.collectionRef());
        return querySnapshot.docs.map(doc => doc.data()) ?? []

    }

    private collectionRef() {
        return collection(db, "clientes").withConverter(this.conversor)
    }

    private docRef(id?: string) {
        if (id)
            return doc(db, "clientes", id).withConverter(this.conversor);
    }

}