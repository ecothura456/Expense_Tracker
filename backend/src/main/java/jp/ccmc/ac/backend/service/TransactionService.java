package jp.ccmc.ac.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jp.ccmc.ac.backend.entity.Transaction;
import jp.ccmc.ac.backend.repository.TransactionRepository;

@Service
public class TransactionService {

    private final TransactionRepository repository;

    public TransactionService(TransactionRepository repository){
        this.repository = repository;
    }

    public List<Transaction> getAllTransactions(){
        return repository.findAll();
    }

    public Optional<Transaction> getTransactionById(Long id){
        return repository.findById(id);
    }

    public Transaction saveTransaction(Transaction transaction){
        return repository.save(transaction);
    }

    public Transaction updateTransaction(Long id,Transaction transaction){
        Transaction existing = repository.findById(id)
        .orElseThrow(() -> new RuntimeException("Transaction not found"));

        existing.setTitle(transaction.getTitle());
        existing.setAmount(transaction.getAmount());
        existing.setType(transaction.getType());
        existing.setCategory(transaction.getCategory());
        existing.setTransactionDate(transaction.getTransactionDate());
        
        return repository.save(existing);
    }

    public void deleteTransaction(Long id){
        repository.deleteById(id);
    }

}
