# API docs

## π κ²μν
 
<details>
  <summary>μ μ²΄ λͺ©λ‘ μ‘°ν API</summary>

### Request

- Method: `GET`
- URL: `/posts`

### Response

- HTTP Status Code: `200`
- Payload:
    ```jsx
    { name: string, title: string, content: string, date: date, post_id: number }[]
    ```
</details>


<details>
  <summary>κΈ μμΈ μ‘°ν API</summary>

### Request

- Method: `GET`
- URL: `/posts/:postId`
    
### Response

- HTTP Status Code: `200`
- Payload:
    
    ```jsx
    { name: string, title: string, content: string, date: string, post_id: number }
    ```
    </details>


<details>
  <summary>μΆκ° API</summary>

### Request

- Method: `POST`
- URL: `/posts`
- Body:
    ```jsx
    { name: string, title: string, content: string }
    ```

### Response

- HTTP Status Code: `201`
- Payload:
    
    ```jsx
    { success: string }
    ```

</details>


<details>
  <summary>μμ  API</summary>

### Request

- Method: `PUT`
- URL: `/posts/:postId`
- Body:
    
    ```jsx
    { name: string, title: string, content: string }
    ```

### Response

- HTTP Status Code: `200`
- Payload:
    
    ```jsx
    { success: string }
    ```
</details>

<details>
  <summary>μ­μ  API</summary>

### Request

- Method: `DELETE`
- URL: `/posts/:postId`

### Response

- HTTP Status Code: `200`
- Payload:
    
    ```jsx
    { success: string }
    ```
</details>

___

    
## π λκΈ

<details>
  <summary>λͺ©λ‘ μ‘°ν API</summary>

### Request

- Method: `GET`
- URL: `/posts/:postId/comments`

### Response

- HTTP Status Code: `200`
- Payload:
    ```jsx
    { name: string, comment: string, date: string, post_id: number, comment_id: number }[]
    ```
</details>


<details>
  <summary>μμ± API</summary>

### Request

- Method: `POST`
- URL: `/posts/:postId/comments`
- Body:
    ```jsx
    { name: string, comment: string }
    ```

### Response

- HTTP Status Code: `201`
- Payload:
    
    ```jsx
    { success: string }
    ```

</details>


<details>
  <summary>μμ  API</summary>

### Request

- Method: `PUT`
- URL: `/posts/:postId/comments/:commentId`
- Body:
    
    ```jsx
    { name: string, comment: string }
    ```

### Response

- HTTP Status Code: `200`
- Payload:
    
    ```jsx
    { success: string }
    ```
</details>

<details>
  <summary>μ­μ  API</summary>

### Request

- Method: `PUT`
- URL: `/posts/:postId/comments/:commentId`

### Response

- HTTP Status Code: `200`
- Payload:
    
    ```jsx
    { success: string }
    ```
</details>
