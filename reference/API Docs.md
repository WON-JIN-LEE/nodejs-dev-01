# API docs

## 📋 게시판

<details>
  <summary>전체 목록 조회 API</summary>

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
  <summary>글 상세 조회 API</summary>

### Request

- Method: `GET`
- URL: `/posts/:postId`
    
### Response

- HTTP Status Code: `200`
- Payload:
    
    ```jsx
    { name: string, title: string, content: string, date: date, post_id: number }
    ```
    </details>


<details>
  <summary>추가 API</summary>

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
  <summary>수정 API</summary>

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
  <summary>삭제 API</summary>

### Request

- Method: `PUT`
- URL: `/posts/:postId`

### Response

- HTTP Status Code: `200`
- Payload:
    
    ```jsx
    { success: string }
    ```
</details>

___

    
## 📋 댓글

<details>
  <summary>목록 조회 API</summary>

### Request

- Method: `GET`
- URL: `/posts/:postId/comments`

### Response

- HTTP Status Code: `200`
- Payload:
    ```jsx
    { name: string, comment: string, date: date, post_id: number, comment_id: number }[]
    ```
</details>


<details>
  <summary>작성 API</summary>

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
  <summary>수정 API</summary>

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
  <summary>삭제 API</summary>

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
